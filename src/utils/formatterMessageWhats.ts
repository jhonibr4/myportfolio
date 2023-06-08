export function formatterMessageWhats(message: string): string {
  const messageFormatted = message.replace(/ /g, '%20')

  return messageFormatted
}
