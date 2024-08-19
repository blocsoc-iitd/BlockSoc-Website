import React from 'react';

const resources = [
  {
    heading: 'Basic',
    links: [
      { name: 'Setting up metamsk & wallets', url: 'https://rb.gy/yybz' },
      { name: 'WhiteboardCrypto youtube', url: 'https://www.youtube.com/c/whiteboardcrypto' },
      { name: 'Blockchain Demo', url: 'https://blockchaindemo.io/' },
    ],
  },
  {
    heading: 'Papers',
    links: [
      { name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' },
      { name: 'Ethereum Whitepaper', url: 'https://ethereum.org/en/whitepaper/' },
      { name: 'Uniswap', url: 'https://uniswap.org/whitepaper-v3.pdf' },
      { name: 'Messari Crypto Thesis', url: 'https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf' },
    ],
  },
  {
    heading: 'Hands-on Experience (Projects)',
    links: [
      { name: 'CryptoZombies Course', url: 'http://cryptozombie.io/' },
      { name: 'Buildspace', url: 'https://buildspace.so/' },
      { name: 'Rabbithole Tasks', url: 'https://app.rabbithole.gg/skills' },
      { name: 'Fun Web3 Game', url: 'https://fweb3.xyz/' },
      { name: 'An educational sandbox for web3', url: 'https://eth.build/' },
    ],
  },
  {
    heading: 'Books',
    links: [
      { name: 'Token Economy Book', url: 'https://github.com/Token-Economy-Book/EnglishOriginal/wiki' },
      { name: 'Bitcoin Book', url: 'https://bitcoinbook.cs.princeton.edu/' },
      { name: 'Mastering Etherum', url: 'https://github.com/ethereumbook/ethereumbook' },
      { name: 'Data Intensive Application', url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/' },
    ],
  },
  {
    heading: 'Articles',
    links: [
      { name: 'Threesigma.xyz', url: 'https://threesigma.xyz/blog' },
      { name: 'Paradigam', url: 'https://www.paradigm.xyz/writing' },
      { name: 'The Magical World of Blockchains', url: 'https://maze-silk-707.notion.site/Blockchains-cryptocurrency-and-web3-8e1067beaa9742c0b9438996286ff028' },
      { name: ' Architecture of a Web3 application', url: 'https://preethikasireddy.com/post/the-architecture-of-a-web-3-0-application' },
    ],
  },
  {
    heading: 'All-in-One',
    links: [
      { name: 'www.useweb3.xyz', url: 'https://www.useweb3.xyz/' },
      { name: 'Web 3.0 Kickstarter Pre-study material', url: 'https://growthschool.notion.site/GS-6-Week-Web-3-0-Kickstarter-Program-Pre-study-material-dc0ace72ddba4fdb9a51f3c6399a8a10' },
    ],
  },
  {
    heading: 'Zk Compilation',
    links: [
      { name: 'Circom installation', url: 'https://docs.circom.io/getting-started/installation/' },
      { name: 'Matter-labs/awesomeZKproofs', url: 'https://github.com/matter-labs/awesome-zero-knowledge-proofs' },
      { name: 'Ventali/awesome-zk', url: 'https://github.com/ventali/awesome-zk' },
      { name: 'arnaucube/awesome-circom', url: 'https://github.com/arnaucube/awesome-circom' },
    ],
  },
];

const Resources = () => {
  return (
    <div className="container mx-auto p-4 " style={{ maxWidth: '1000px' }}>
      <h1 className="text-3xl font-bold text-neonGreen mb-8">Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-transparent p-6 rounded-lg shadow-md border-2 border-neonBlue"
          >
            <h2 className="text-3xl font-semibold text-neonYellow mb-4">{resource.heading}</h2>
            <ul className="list-disc list-inside space-y-2">
              {resource.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-white text-base hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

