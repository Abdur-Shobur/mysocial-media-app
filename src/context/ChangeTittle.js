import { useEffect } from 'react'

const ChangeTittle = (tittle) => {
  useEffect(() => {
    document.title = tittle
  }, [tittle])
}
export default ChangeTittle
