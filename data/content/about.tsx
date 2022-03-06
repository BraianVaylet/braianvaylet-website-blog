import { Text } from '@chakra-ui/react'

const title = 'Que estoy haciendo'

const introduction = `
  Soy de esas personas a la que le gusta estar haciendo un poco de todo, desde el 2021 me encuentro cubriendo varios roles en paralelo.
`

export const content = [
  {
    title: <Text>📚 Estudiante en tecnologías <b>web3</b> y <b>blockchain</b></Text>,
    content: null
  },
  {
    title: <Text>📚 Estudiante en diseño y desarrollo <b>UX/UI</b></Text>,
    content: null
  },
  {
    title: <Text>👨‍🏫 <b>Tutor</b> en Coderhouse</Text>,
    content: null
  },
  {
    title: <Text>👨‍💻 <b>Desarrollador frontend</b> en Telecom Globant</Text>,
    content: null
  }
]

export default {
  title,
  introduction,
  content
}
