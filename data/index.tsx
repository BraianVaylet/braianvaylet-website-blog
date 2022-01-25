import { Text } from '@chakra-ui/react'
import BodyExperience from 'components/molecules/BodyExperience'
import BodyProject from 'components/molecules/BodyProject'
import { FaEthereum, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Pages = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/',
    title: 'About'
  },
  {
    path: '/posts',
    title: 'Blog'
  }
]

export const Social = [
  {
    path: 'https://www.linkedin.com/in/braianvaylet',
    title: 'Linkedin',
    icon: FaLinkedin
  },
  {
    path: 'https://github.com/BraianVaylet',
    title: 'Github',
    icon: FaGithub
  }
]

export const dataSection2 = [
  {
    title: 'Estudiante en tecnologias blockchain',
    content: (
      <Text>
        {'Como fanatico y creyente del mundo crypto y defi me encuentro formandome como desarrollador blockchain en tecnologias Web3 y Solidity con esperanzas de un futuro cambio de carrera.'}
      </Text>
    )
  },
  {
    title: 'Tutor en Coderhouse',
    content: (
      <Text>
        {'Formo parte del plantel de tutores de Coderhouse, actualmente me encuentro en los cursos de React.js donde ayudo a los estudiantes del mismo haciendo un seguimiento y dandoles feedback de sus avances, respondiendo sus consultas, corrigiendo los desafios del curso y dictando los After-class de la plataforma.'}
      </Text>
    )
  },
  {
    title: 'Dev y referente FE en Telecom-Globant',
    content: (
      <Text>
        {'Como Web UI developer en Globant, me encuentro trabajando para la cuenta de Telecom como desarrollador y referente front-end usando tecnologias como Next.js, React.js, Stencil.js, Storybook, TypeScript, Node.js, AEM, Strapi y muchas mas...'}
      </Text>
    )
  }
]

export const dataSection3 = [
  {
    title: 'Telecom',
    content: (
      <BodyExperience
        content={'Como desarrollador de Globant arranque a formar parte de la cuenta de Telecom en Febrero del 2021, donde me uni al equipo de frontenders del proyecto TIENDA. Luego pase a formar parte del proyecto LANDINGS donde estoy actualmente. Con el paso del tiempo fui tomando nuevas responsabilidades dentro del proyecto, pase a convertirme en referente FE dentro del pod y luego a ser referente a nivel Cross entre todos los pods y proyectos.'}
        website={'https://www.telecom.com.ar/'}
      />
    )
  },
  {
    title: 'Globant',
    content: (
      <BodyExperience
        content={'Ingrese a Globant oficialmente en Diciembre del 2020 tras adquirir la empresa Parablot donde me encontraba trabajando. Ingrese como Web UI developer Ssr. advance y pase rapidamente a formar parte de la cuenta TELECOM, una de sus cuentas mas grandes en latam.'}
        website={'https://www.globant.com/'}
      />
    )
  },
  {
    title: 'Parabolt - gA - grupoAssa',
    content: (
      <BodyExperience
        content={'Parabolt es una unidad de negocios de la empresa grupo ASSA y arranque a trabajar de forma remota a finales de Noviembre del 2020, poco antes de ser adquirida por Globant. Durante unos meses forme parte de un proyecto internacional como desarrollador front-end y cubri el puesto de referente en React dentro del equipo.'}
        website={'https://grupoassa.com/'}
      />
    )
  },
  {
    title: 'Eycon SA',
    content: (
      <BodyExperience
        content={'Arranque a trabajar en Eycon en Marzo del 2020, poco antes de que iniciara la pandemia. Eycon es una empresa de la ciudad de Bahia Blanca la cual desarrolla software como hardware. Forme parte del equipo de desarrollo de software como FullStack developer tanto web como mobile, forme parte de gran parte de los proyectos de la empresa utilizando React-Native, React.js, Node.js, Laravel y mas...'}
        website={'https://eycon.com/'}
      />
    )
  },
  {
    title: 'Freelancer',
    content: (
      <Text>
        {'Durante el 2020 forme parte de un proyecto internacional como freelancer junto a un grupo de desarrolladores situados en Venezuela, España y Mexico.'}
      </Text>
    )
  },
  {
    title: 'NexoSmart',
    content: (
      <BodyExperience
        content={'A mediados de Marzo del 2018 me inicie en el mundo IT trabajando como desarrollador FullStack para la empresa NexoSmart. NexoSmart es una pequeña PyMES de Bahia Blanca que funciona principalmente como una Software Factory. Durante los 2 años que trabaje en ella desarrolle varios roles como desarrollador, PM y TL. Tambien me encargaba de varias de las tareas administrativas de la empresa y me encargaba de hacer seguimiento a los clientes. El stack que usabamos se limitaba a jquery y PHP. Durante mi paso por NexoSmart trabaje en mas de 60 proyectos web y mobiles.'}
        website={'https://www.nexosmart.com.ar/'}
      />
    )
  }
]

export const dataSection4 = [
  {
    title: '🦅 Aquila Store',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/AquilaStore/main/src/assets/images/aquila.png',
          alt: 'logo Aquila Store'
        }}
        content={'🦅 Aquila Store, es un proyecto e-commerce desarrollado con React.js, Chakra-ui y firebase. Se desarrollo como proyecto final para el curso de React.js dictado por Coderhouse.'}
        links={[
          {
            url: 'https://braianvaylet.github.io/AquilaStore/',
            name: 'Web'
          },
          {
            url: 'https://braianvaylet.github.io/AquilaStoreDoc/',
            name: 'Documentación'
          },
          {
            url: 'https://github.com/BraianVaylet/AquilaStore',
            name: 'Github',
            icon: FaGithub
          }
        ]}
      />
    )
  },
  {
    title: '🍊 Citrix',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/citrix-coderhouse-curso-react-tienda/master/src/assets/images/citric-logo.png',
          alt: 'logo Citrix'
        }}
        content={'🍊 Citrix, es un proyecto e-commerce para los alumnos del curso de React.js de Coderhouse con el objetivo de ser usado como material de consulta donde pueden ver el desarrollo del proyecto paso a paso siguiendo los desafíos.'}
        links={[
          {
            url: 'https://citrix-coderhouse-store.vercel.app/',
            name: 'Webs'
          },
          {
            url: 'https://github.com/BraianVaylet/citrix-coderhouse-curso-react-tienda',
            name: 'Github',
            icon: FaGithub
          }
        ]}
      />
    )
  },
  {
    title: '🦄 Wave Portal',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-wave-portal-ui/main/public/horn.png',
          alt: 'logo Wabe Portal'
        }}
        content={'🦄 Wave Portal, es un proyecto donde podrás ver y enviar un mensaje anónimo y ser recompensado con ETH. Para ello necesitas conectarte con Metamask a la testnet de Rinkeby y tener ETH para utilizar.'}
        links={[
          {
            url: 'https://buildspace-wave-portal-ui.vercel.app/',
            name: 'Web'
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0xef10AE1B845aEC9251c19cc5af7d4dda7424F52D',
            name: 'Contrato',
            icon: FaEthereum
          },
          {
            url: 'https://github.com/BraianVaylet/buildspace-wave-portal-ui',
            name: 'Github',
            icon: FaGithub
          }
        ]}
      />
    )
  },
  {
    title: '🐲 Epic NFTs',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-nfts-ui/main/public/dragon2.png',
          alt: 'logo Epic NFTs'
        }}
        content={'🐲 Epic NFTs, es un proyecto que te permitirá conectar tu billetera y acuñar un NFT, podrás revender el NFT en OpenSea. El NFT en sí se puede personalizar.'}
        links={[
          {
            url: 'https://epic-nfts-ui-ten.vercel.app/',
            name: 'Web'
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0x9a59CFc34ABED8FDE5989892A1D2B75235d14b14',
            name: 'Contrato',
            icon: FaEthereum
          },
          {
            url: 'https://github.com/BraianVaylet/buildspace-epic-nfts-ui',
            name: 'Github',
            icon: FaGithub
          }
        ]}
      />
    )
  }
]
