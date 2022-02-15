import BodyExperience from 'components/BodyExperience'

const title = 'Experiencia'

const introduction = `
  En los últimos años trabajé en diferentes empresas donde puede aplicar mis conocimientos como desarrollador utilizando varias
  tecnologías del mercado, cubriendo roles como desarrollador FullStack y como desarrollador FrontEnd desde pequeños a grandes 
  proyectos. También pude tener la experiencia de cubrir otros roles como los de Referente tecnológico en Frontend, Technical Leader, 
  Project Manager, Technical Recruiter, Organizador de eventos y conferencias en tecnología y algunos más que no vale la pena mencionar...
  A partir de 2021 decidí también dedicarme a la educación tomando el rol de tutor en los cursos de React dictados por Coderhouse.
`

const content = [
  {
    title: 'Telecom',
    content: (
      <BodyExperience
        content={`
          <i>(Febrero 2021 - Actualidad)</i>
          <br/>
          En Febrero del 2021 me uní a la cuenta de Telecom ARG para formar parte del proyecto de Transformación IT, dentro de la 
          Tribu de Canales Digitales. El objetivo inicial del proyecto era la mejora tecnológica de todos los canales digitales
          de la empresa, así como de la implementación de la nueva unificación marcaria que la empresa tenía como objetivo 
          implementar ese mismo año.
          <br/>
          Ingrese como desarrollador FrontEnd para el Pod Tierra Media y luego tome también el rol de referente FrontEnd 
          a nivel cross junto a un equipo de referentes.
          <br/>
          En este proyecto desarrollamos una arquitectura basada en Next.js y AEM implementando Micro-FrontEnd y ampliando
          su funcionalidad con el desarrollo de un Design System propio basado en Stencil.js y del uso de un BFF implementado en
          Strapi. Es un proyecto en constante desarrollo donde todos los dias buscamos implementar nuevas mejoras 
          y tecnologías para obtener la mejor performance y velocidad de desarrollo.
        `}
        website={'https://www.telecom.com.ar/'}
      />
    )
  },
  {
    title: 'Globant',
    content: (
      <BodyExperience
        content={`
          <i>(Diciembre 2020 - Actualidad)</i>
          <br/>
          Me encuentro trabajando para Globant desde el primero de Diciembre del 2020,
          entre por medio de la empresa gA, en la cual me encontraba trabajando.
          <br/>
          Tras su adquisición por Globant, pase a formar parte de la empresa bajo el
          puesto de Web UI Developer Ssr Adv. donde comencé a trabajar para la cuenta de Telecom ARG como desarrollador FrontEnd del proyecto Transformación-IT
        `}
        website={'https://www.globant.com/'}
      />
    )
  },
  {
    title: 'Coderhouse',
    content: (
      <BodyExperience
        content={`
          <i>(Junio 2021 - Actualidad)</i>
          <br/>
          Inicie en Coderhouse a principios del 2021 como estudiante del curso de React.js. Al finalizar decidí continuar en la plataforma y tomar el rol de Tutor.
          <br/>
          Entre mis responsabilidades como tutor se encuentran brindar apoyo a los estudiantes, resolver todas sus dudas respecto a los temas del curso como así como con la plataforma, corregir los desafíos incluidos en el cursado y dictar los after-class (clases extras dictadas por tutores para complementar ciertos temas).
        `}
        website={'https://www.coderhouse.com/'}
      />
    )
  },
  {
    title: 'gA',
    content: (
      <BodyExperience
        content={`
          <i>(Noviembre 2020 - Febrero 2020)</i>
          <br/>
          Parabolt es una unidad de la empresa gA o grupo Assa, ingrese en Noviembre del 2020 para trabajar en un proyecto <b>Sensie</b>, un nuevo cliente de la empresa.
          <br/>
          Ingresé como desarrollador FrontEnd y referente en React, nuestro trabajo era desarrollar e integrar el front de la landing page y del CMS con el equipo de backend y el equipo mobile (desarrollados por otras empresas situadas en EEUU y España). Desarrollamos el producto utilizando React, React Native y GraphQL.
        `}
        website={'https://grupoassa.com/'}
      />
    )
  },
  {
    title: 'Eycon SA',
    content: (
      <BodyExperience
        content={`  
          <i>(Marzo 2020 - Noviembre 2020)</i>
          <br/>     
          Arranque a trabajar en Eycon en Marzo del 2020, poco antes de que iniciara la pandemia. 
          Eycon es una empresa de la ciudad de Bahía Blanca la cual desarrolla tanto software como hardware. 
          <br/>
          Mi trabajo era el mantenimiento y el nuevo desarrollo de los productos de la empresa... Tuve la posibilidad de iniciar junto a un gran equipo
          un proyecto muy interesante llamado <b>ByFy</b>.
          <br/>
          Me encontré desarrollando en varias tecnologías como ReactNative, React, TypeScript, NodeJs, Express, Laravel, PHP y otras...
        `}
        website={'https://eycon.com/'}
      />
    )
  },
  {
    title: 'Freelancer',
    content: (
      <BodyExperience
        content={`  
          <i>(Junio 2020 - Agosto 2020)</i>
          <br/> 
          Durante el 2020 formé parte de un proyecto internacional como freelancer durante 3 meses para un cliente en España.
          Junto a un grupo de desarrolladores que se encontraban situados en Venezuela, España, México y Chile comenzamos el desarrollo
          del proyecto el cual consiste de una aplicación web y mobile para la administración de un restaurante.
        `}
      />
    )
  },
  {
    title: 'NexoSmart',
    content: (
      <BodyExperience
        content={`
          <i>(Marzo 2018 - Marzo 2020)</i>
          <br/>
          A mediados de Marzo del 2018 me inicie en el mundo IT trabajando como desarrollador FullStack para la empresa NexoSmart.
          NexoSmart es una pequeña PyMES de Bahía Blanca que funciona principalmente como una Software Factory. Durante los 2 años
          que trabajé en ella me desarrollé como FullStack developer, aunque tambien tuve que cubrir varios roles como los de Technical Leader, 
          Project Manager, Technical Recruiter, Organizador de eventos y conferencias de tecnología, tareas administrativas como cobros, pagos
          y algunos roles más que no vale la pena mencionar...
          Durante mi paso por NexoSmart trabaje en más de 60 proyectos web y móviles, el stack que utilizabamos se limitaba a jquery y PHP. 
        `}
        website={'https://www.nexosmart.com.ar/'}
      />
    )
  }
]

export default {
  title,
  introduction,
  content
}
