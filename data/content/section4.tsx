import { FaEthereum, FaGithub } from 'react-icons/fa'
import BodyProject from 'components/BodyProject'

const title = 'Algunos Proyectos'

const introduction = `
  Algunos de los proyectos personales en los que estoy trabajando, normalmente no suelo disponer de mucho tiempo
  libre para desarrollar fuera de mis responsabilidades con mis trabajos actuales... 
  Aun así dispongo de algunos proyectos que realice con fines educativos, pueden revisar mi cuenta de Github para ver otros...
`

const content = [
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

export default {
  title,
  introduction,
  content
}
