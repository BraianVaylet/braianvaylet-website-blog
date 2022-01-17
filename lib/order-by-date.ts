export const orderByDate = (prev: any, current: any) => (
  new Date(current.date).getTime() - new Date(prev.date).getTime()
)
