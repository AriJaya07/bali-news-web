import React from 'react'
import { JQ as $ } from '@/@utils/common'


export function showTooltip(e: React.MouseEvent): void {
	const description: string = $(e).closest('label').find('.tooltip').html()
	const title: string = $(e).closest('label').children('span').html()
	$('#tooltip-modal-content').html(description)
	$('#tooltip-modal-title').html(title)
	$('#tooltip-modal').modal('show')
}


export function hideTooltip(): void {
	$('#tooltip-modal').modal('hide')
}
