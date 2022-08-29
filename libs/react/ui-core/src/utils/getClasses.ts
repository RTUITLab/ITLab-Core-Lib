export function getClasses(props:{[index: string]: any}, styles: any, className?: string | string[]):{[index: string]: any} {
  const classList = Object.keys(props).reduce((classList:any, key) => {
    if (typeof props[key]==="boolean" && props[key]) {
      classList[key] = styles[key]
    }
    return Object.values(classList);
  },{});

  if(typeof className === 'string') classList.push(className)
  else if(typeof className === 'object') classList.push(...className)

  return classList.join(' ')
}
