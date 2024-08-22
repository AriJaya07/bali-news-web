import { UserList } from "@/@entities/userList";
import { environment } from "./env";import { log } from "./log";


export function getUserInfo(isLog = false): UserList {
  let user: string | null = '';
  if (environment.useStorage) { /* empty */ } else {
    user = localStorage.getItem(environment.sessionName);
  }

  if (typeof user === 'string') {
    const sess = new UserList(JSON.parse(user));
    if (isLog) {
      log('SESSION_VARIABLES', sess);
    }
    return sess;
  }
  return new UserList();
}

export async function setUserInfo(user: UserList) {
  localStorage.setItem(environment.sessionName, JSON.stringify(user));
}

export async function updateUserProfile(user: UserList) {
  if (environment.useStorage) { /* empty */ } else {
    const u = await getUserInfo();
    user.token = u.token;
    localStorage.setItem(environment.sessionName, JSON.stringify(user));
  }
}

export function getAuthToken(): string | false {
  const sess = getUserInfo();
  const credential = sess ? sess.token : false;
  return credential;
}

export async function clearAuthToken() {
  const sess = new UserList();
  await setUserInfo(sess);
}

export async function setAuthToken(token: string) {
  const user = new UserList();
  user.token = token;
  await setUserInfo(user);
}
