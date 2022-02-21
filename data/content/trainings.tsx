import BodyProject from 'components/BodyProject'

const title = 'Capacitaciones'

const introduction = `
  Como todo developer autodidacta estoy constantemente en modo estudiante.
  Actualmente me encuentro estudiando y perfeccionando en temáticas como desarrollo Web (front y back),
  desarrollo Blockchain (web3 y smart-contracts), liderazgo y habilidades blandas las cuales me ayudan en mis tareas diarias...
`

const content = [
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
        content={'Realice un curso de React.js y luego tras tomar el rol de Tutor comencé con las capacitaciones sobre tutorías'}
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
        content={'Cursos y capacitaciones de la universidad Globant y la plataforma Acámica'}
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

export default {
  title,
  introduction,
  content
}
