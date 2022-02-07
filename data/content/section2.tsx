import { Text } from '@chakra-ui/react'

const title = 'Que estoy haciendo'

const introduction = `
  Soy de esas personas a la que le gusta estar haciendo un poco de todo, desde el 2021 me encuentro cubriendo varios roles en paralelo.
`

export const content = [
  {
    title: 'Estudiante en tecnologías blockchain',
    content: (
      <Text>
        {'Como fanatico y creyente del mundo crypto y defi me encuentro formándome como desarrollador blockchain en tecnologías Web3 y Solidity con esperanzas de un futuro cambio de carrera.'}
      </Text>
    )
  },
  {
    title: 'Tutor en Coderhouse',
    content: (
      <Text>
        {'Formo parte del plantel de tutores de Coderhouse, actualmente me encuentro en los cursos de React.js donde ayudo a los estudiantes del mismo haciendo un seguimiento y dándoles feedback de sus avances, respondiendo sus consultas, corrigiendo los desafíos del curso y dictando los After-class de la plataforma.'}
      </Text>
    )
  },
  {
    title: 'Dev y referente FE en Telecom-Globant',
    content: (
      <Text>
        {'Como Web UI developer en Globant, me encuentro trabajando para la cuenta de Telecom como desarrollador y referente front-end usando tecnologías como Next.js, React.js, Stencil.js, Storybook, TypeScript, Node.js, AEM, Strapi y muchas mas...'}
      </Text>
    )
  }
]

export default {
  title,
  introduction,
  content
}
