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

export const dataSection3 = [
  {
    title: 'Telecom',
    content: (
      <BodyExperience
        content={'Como desarrollador de Globant arranque a formar parte de la cuenta de Telecom en Febrero del 2021, donde me uní al equipo de frontenders del proyecto TIENDA. Luego pasé a formar parte del proyecto LANDINGS donde estoy actualmente. Con el paso del tiempo fui tomando nuevas responsabilidades dentro del proyecto, pase a convertirme en referente FE dentro del pod y luego a ser referente a nivel Cross entre todos los pods y proyectos.'}
        website={'https://www.telecom.com.ar/'}
      />
    )
  },
  {
    title: 'Globant',
    content: (
      <BodyExperience
        content={'Ingrese a Globant oficialmente en Diciembre del 2020 tras adquirir la empresa Parablot donde me encontraba trabajando. Ingrese como Web UI developer Ssr. advance y pase rápidamente a formar parte de la cuenta TELECOM, una de sus cuentas más grandes en latam.'}
        website={'https://www.globant.com/'}
      />
    )
  },
  {
    title: 'Parabolt - gA - grupoAssa',
    content: (
      <BodyExperience
        content={'Parabolt es una unidad de negocios de la empresa grupo ASSA y arranque a trabajar de forma remota a finales de Noviembre del 2020, poco antes de ser adquirida por Globant. Durante unos meses forme parte de un proyecto internacional como desarrollador frontend y cubri el puesto de referente en React dentro del equipo.'}
        website={'https://grupoassa.com/'}
      />
    )
  },
  {
    title: 'Eycon SA',
    content: (
      <BodyExperience
        content={'Arranque a trabajar en Eycon en Marzo del 2020, poco antes de que iniciara la pandemia. Eycon es una empresa de la ciudad de Bahía Blanca la cual desarrolla software como hardware. Forme parte del equipo de desarrollo de software como FullStack developer tanto web como mobile, forme parte de gran parte de los proyectos de la empresa utilizando React-Native, React.js, Node.js, Laravel y más...'}
        website={'https://eycon.com/'}
      />
    )
  },
  {
    title: 'Freelancer',
    content: (
      <Text>
        {'Durante el 2020 forme parte de un proyecto internacional como freelancer junto a un grupo de desarrolladores situados en Venezuela, España y México.'}
      </Text>
    )
  },
  {
    title: 'NexoSmart',
    content: (
      <BodyExperience
        content={'A mediados de Marzo del 2018 me inicie en el mundo IT trabajando como desarrollador FullStack para la empresa NexoSmart. NexoSmart es una pequeña PyMES de Bahía Blanca que funciona principalmente como una Software Factory. Durante los 2 años que trabajé en ella desarrollé varios roles como desarrollador, PM y TL. También me encargaba de varias de las tareas administrativas de la empresa y me encargaba de hacer seguimiento a los clientes. El stack que usábamos se limitaba a jquery y PHP. Durante mi paso por NexoSmart trabaje en más de 60 proyectos web y móviles.'}
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
        content={'🦅 Aquila Store, es un proyecto e-commerce desarrollado con React.js, Chakra-ui y firebase. Se desarrolló como proyecto final para el curso de React.js dictado por Coderhouse.'}
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

export const dataSection5 = [
  {
    title: 'buildspace',
    content: (
      <BodyProject
        content={'Cursos sobre desarrollo Blockchain y Web3 en Ethereum y Solana con Solidity, Rust, React y otras librerías...'}
        links={[
          {
            url: 'https://buildspace.so/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/drive/folders/1XZZ62GAc9oTIJP3AH81CUuxpksAbwN1U',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Platzi',
    content: (
      <BodyProject
        content={'Cursos sobre desarrollo Web, Blockchain, liderazgo y programación en general...'}
        links={[
          {
            url: 'https://platzi.com/p/braianvaylet/',
            name: 'Perfil'
          },
          {
            url: 'https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Coderhouse & Tutor School',
    content: (
      <BodyProject
        content={'Realice un curso de React.js y luego tras tomar el rol de Tutor comence con las capacitaciones sobre tutorías'}
        links={[
          {
            url: 'https://www.coderhouse.com/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/drive/folders/1z-_u1kJbxb_hpnk7sb18Y9pXdvhV_cM6',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Udemy',
    content: (
      <BodyProject
        content={'Cursos sobre desarrollo Web'}
        links={[
          {
            url: 'https://www.udemy.com/',
            name: 'Perfil'
          },
          {
            url: 'https://drive.google.com/drive/folders/1d0iqeVz9RsLOCRzEtcO4DAmboX0Ovdsu',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'JavaScript Mental Models',
    content: (
      <BodyProject
        content={'Curso de Modelos Mentales en JavaScript dictado por el genio Dan Abramov e ilustrado por Maggie Appleton '}
        links={[
          {
            url: 'https://justjavascript.com/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/file/d/1hP7FQPYtJuRoDTJo-tNDOCeLQZpM4FJU/view',
            name: 'Certificado'
          }
        ]}
      />
    )
  },
  {
    title: 'Capacitaciones KnowBe4',
    content: (
      <BodyProject
        content={'Capacitaciones sobre seguridad informática realizadas durante mi transcurso en Globant dictadas por la plataforma KnowBe4'}
        links={[
          {
            url: 'https://www.knowbe4.com/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/drive/folders/1t6u1io-XujNO7acbuL7SLg4hYwly5s9C',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Globant University',
    content: (
      <BodyProject
        content={'Cursos y capacitaciones de la universidad Globant y la plataforma Acamica'}
        links={[
          {
            url: 'https://university.globant.com/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/drive/folders/11yTpI6qQphyyJZajnn3EFsUMuD6-gJxC',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Cisco Networking Academy',
    content: (
      <BodyProject
        content={'Realice los cursos de Cisco Cybersecurity Essentials & Cisco Introducción a la Seguridad Cibernética de forma presencial'}
        links={[
          {
            url: 'https://www.netacad.com/es',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/drive/folders/13yWSl1bY3r6TU-Oh_osugj_T6RCwQF_0',
            name: 'Certificados'
          }
        ]}
      />
    )
  },
  {
    title: 'Comunidad IT',
    content: (
      <BodyProject
        content={'Curso presencial Desarrollo Full Stack PHP, desarrollo de aplicaciones Web'}
        links={[
          {
            url: 'https://www.comunidadit.org/',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/file/d/1Yt0tbIRi_CRIW3XvJA8OrBUdsSIU2lCJ/view',
            name: 'Certificado'
          }
        ]}
      />
    )
  },
  {
    title: 'Escuela de Enseñanza Media N°2 - Tte.Gral.Nicolás Levalle de Carhué',
    content: (
      <BodyProject
        content={'Realice el secundario con orientación en programación y obtuve el certificado Programación Básica (2006-2008)'}
        links={[
          {
            url: '#',
            name: 'Plataforma'
          },
          {
            url: 'https://drive.google.com/file/d/1gCEwfsF7TiBclH8lueiBy11EdMKgCbd5/view',
            name: 'Certificado'
          }
        ]}
      />
    )
  }
]
