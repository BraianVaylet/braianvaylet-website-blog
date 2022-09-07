import { Text } from '@chakra-ui/react'

const title = 'Que estoy haciendo'

const introduction = `
  Soy de esas personas a la que le gusta estar haciendo un poco de todo, desde el 2021 me encuentro cubriendo varios roles en paralelo y estudiando a full 💪.
`

export const content = [
  {
    title: <Text>🚀 Estudiante en tecnologías <b>Web3</b> y <b>Blockchain</b></Text>,
    content: null
  },
  {
    title: <Text>👨‍🏫 <b>Tutor</b> en Coderhouse</Text>,
    content: null
  },
  {
    title: <Text>👨‍💻 Desarrollador <b>Web UI</b> en Globant</Text>,
    content: null
  }
]

export default {
  title,
  introduction,
  content
}
