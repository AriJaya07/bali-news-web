// @ts-ignore
import moment from "moment";
import { Dispatch, SetStateAction, useState } from "react";

declare var $: any;

export function hideLoader() {
  $(".preloader").fadeOut(1000);
}

export function sleep(sec: number) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, {}), sec * 1000);
  });
}

// @ts-ignore
export function JQ(e: any) {
  const element =
    e instanceof $ || typeof e === "string" ? e : (e.target as Element);
  return $(element);
}

export function exec(promiseVoid: () => Promise<void>): void {
  void promiseVoid();
}

export function now() {
  return new Date().getTime();
}

export function fileToBase64(event: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = () => {
      // @ts-ignore
      resolve(reader.result.split(",")[1]);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
}

// to define number in the post
export function getStartRow(currentPage: number, limit: number): number {
  return Number(currentPage) * Number(limit) - 9;
}

export function formattedDate(date?: string): string {
  return moment(date).format("MMM DD, YYYY");
}

export function formatStart(date?: any): string {
  return moment(date).format("YYYY-MM-DD");
}

export function addMonths(date: any, months: any) {
  let d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function copyClipboard(message: any): any {
  navigator.clipboard
    .writeText(message)
    .then(() => {
      alert("Message copied to clipboard!");
    })
    .catch((err) => {
      console.error("failed to copy", err);
    });
}

export default function formattedNumber(value: any) {
  // Handle edge case where value is empty
  if (value === "") return "";
  // Convert to number and format with commas
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
