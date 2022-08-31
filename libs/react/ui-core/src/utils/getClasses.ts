export function getClasses(conditions:{[index: string]: boolean}, styles: any, className?: string | string[]): string {
  const classList = Object.keys(conditions).reduce((classList:any, key) => {
    if (conditions[key]) {
      classList[key] = styles[key]
    }
    return Object.values(classList);
  },{});

  if(typeof className === 'string') classList.push(className)
  else if(typeof className === 'object') classList.push(...className)

  return classList.join(' ')
}
