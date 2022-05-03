import { FaEthereum, FaGithub } from 'react-icons/fa'
import BodyProject from 'components/BodyProject'

const title = 'Proyectos'

const introduction = `
  Algunos de los proyectos personales en los que estoy trabajando, normalmente no suelo disponer de mucho tiempo
  libre para desarrollar fuera de mis responsabilidades con mis trabajos actuales... 
  Aun así dispongo de algunos proyectos que realice con fines educativos, pueden revisar mi cuenta de Github para ver otros...
`

const content = [
  {
    title: '🎨 V Dark Theme',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/v-dark-theme/main/public/images/logos/logo.png',
          alt: 'logo V Dark Theme'
        }}
        content={'🎨 V Dark Theme - Un tema inspirado en la paleta de colores de esta web. Actualmente tiene soporte para varias plataformas.'}
        links={[
          {
            url: '/themes/vdark',
            name: 'Web'
          },
          {
            url: 'https://marketplace.visualstudio.com/items?itemName=BraianVaylet.v-dark',
            name: 'vscode'
          },
          {
            url: 'https://addons.mozilla.org/en-US/firefox/addon/v-dark-theme/',
            name: 'firefox'
          },
          {
            url: 'https://github.com/BraianVaylet/v-dark-theme',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['vscode', 'windows-terminal', 'slack', 'chrome', 'firefox', 'css', 'scss']}
      />
    )
  },
  {
    title: '🍄 Magic Mushroom Theme',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/magic-mushroom-theme/main/assets/mushroom.png',
          alt: 'logo V Dark Theme'
        }}
        content={'🍄 Magic Mushroom Theme - Un theme ✨mágico para visual studio code.'}
        links={[
          {
            url: '/themes/magicmushroom',
            name: 'Web'
          },
          {
            url: 'https://marketplace.visualstudio.com/items?itemName=BraianVaylet.magic-mushroom',
            name: 'vscode'
          },
          {
            url: 'https://github.com/BraianVaylet/magic-mushroom-theme',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['vscode']}
      />
    )
  },
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
        stack={['react', 'chakra-ui', 'firebase']}
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
            name: 'Web'
          },
          {
            url: 'https://github.com/BraianVaylet/citrix-coderhouse-curso-react-tienda',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['react', 'grommet', 'firebase']}
      />
    )
  },
  {
    title: '🦄 Wave Portal',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-wave-portal-ui/main/public/horn.png',
          alt: 'logo Wave Portal'
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
        stack={['next.js', 'chakra-ui', 'ethers', 'solidity', 'hardhat', 'alchemy', 'ethereum']}
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
        stack={['next.js', 'chakra-ui', 'ethers', 'solidity', 'hardhat', 'alchemy', 'ethereum', 'nft']}
      />
    )
  },
  {
    title: '🧙‍♂️ Epic Game',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/public/wizard.png',
          alt: 'logo Epic Game'
        }}
        content={'🧙‍♂️ Epic Game, es un juego NFT que te permitirá conectar tu billetera y acuñar un NFT como personaje, que luego podrás usar en el juego donde el objetivo es derrotar al jefe del contrato.'}
        links={[
          {
            url: 'https://buildspace-epic-game-ui.vercel.app/',
            name: 'Web'
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0x6b741cf326784c304fb47fef4248e3b7e9d161d2',
            name: 'Contrato',
            icon: FaEthereum
          },
          {
            url: 'https://github.com/BraianVaylet/buildspace-epic-game-ui',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['next.js', 'chakra-ui', 'ethers', 'solidity', 'hardhat', 'alchemy', 'ethereum', 'nft']}
      />
    )
  },
  {
    title: '🦇 Bat Domain ENS Service',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-bat-domains-ui/main/public/logo.png',
          alt: 'logo Bat Domain'
        }}
        content={'🦇 Bat Domain, es un servicio ENS implementado sobre la blockchain de Polygon Mumbai que te permitirá conectar tu billetera y acuñar un NFT como dominio usando el token MATIC, que luego podrás ver y editar desde la plataforma.'}
        links={[
          {
            url: 'https://buildspace-bat-domains-ui.vercel.app/',
            name: 'Web'
          },
          {
            url: 'https://mumbai.polygonscan.com/address/0xC1A6a56FA413A506A054Bf92b96eb20359d3158a',
            name: 'Contrato',
            icon: FaEthereum
          },
          {
            url: 'https://github.com/BraianVaylet/buildspace-bat-domains-ui',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['next.js', 'chakra-ui', 'ethers', 'solidity', 'hardhat', 'alchemy', 'polygon', 'mumbai', 'matic', 'ens']}
      />
    )
  },
  {
    title: '🌮 TacoDAO',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/buildspace-taco-dao-ui/main/public/taco.png',
          alt: 'logo TacoDAO'
        }}
        content={'🌮 TacoDAO, es una DAO desarrollada para decidir sobre los tacos.'}
        links={[
          {
            url: 'https://buildspace-taco-dao-ui.vercel.app/',
            name: 'Web'
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0x156a40C0913854645026be920dB7950bab1aA11C',
            name: 'Membership',
            icon: FaEthereum
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0xE190FEAf3c8585ED0a33207535FeEFc62aadb285',
            name: 'Governance Token',
            icon: FaEthereum
          },
          {
            url: 'https://rinkeby.etherscan.io/address/0xA1010FAdf1B4a9Dea19C2cdab235109EA5a2546B',
            name: 'Voting',
            icon: FaEthereum
          },
          {
            url: 'https://github.com/BraianVaylet/buildspace-taco-dao-ui',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['next.js', 'chakra-ui', 'ethers', '3rdweb', 'ethereum', 'dao', 'nft']}
      />
    )
  },
  {
    title: '🐗 Boar Design System',
    content: (
      <BodyProject
        image={{
          src: 'https://raw.githubusercontent.com/BraianVaylet/butterfly-design-system/main/public/boar2.png',
          alt: 'logo Boar Design System'
        }}
        content={'🐗 Boar Design System, es un Design System de componentes en React.'}
        links={[
          {
            url: 'https://www.npmjs.com/package/boar-design',
            name: 'NPM'
          },
          {
            url: 'https://boar-design-system.vercel.app/',
            name: 'Storybook'
          },
          {
            url: 'https://github.com/BraianVaylet/boar-design-system',
            name: 'Github',
            icon: FaGithub
          }
        ]}
        stack={['tsdx', 'react', 'storybook', 'styled-components']}
      />
    )
  }
]

export default {
  title,
  introduction,
  content
}
