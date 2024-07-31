import React from 'react';

const resources = [
  {
    heading: 'Basic',
    links: [
      { name: 'Setting up metamsk & wallets', url: 'https://rbhttps://rb.gy/yybz.gy/yybz' },
      { name: 'WhiteboardCrypto youtube', url: 'https://www.youtube.com/c/whiteboardcrypto://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'Blockchain Demo', url: 'https://developer.https://blockchaindemo.io/.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    heading: 'Papers',
    links: [
      { name: 'Bitcoin Whitepaper', url: 'https://https://https://bitcoin.org/bitcoin.pdf.org/bitcoin.pdf.com/blockchain-paper' },
      { name: 'Ethereum Whitepaper', url: 'https://example.com/https://ethereum.org/en/whitepaper/-paper' },
      { name: 'Uniswap', url: 'https://example.com/https://uniswap.org/whitepaper-v3.pdf-systems-paper' },
      { name: 'Messari Crypto Thesis', url: 'https://example.com/https://uniswap.org/whitepaper-v3.pdf-https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf-paper' },
    ],
  },
  {
    heading: 'Hands-on Experience (Projects)',
    links: [
      { name: 'CryptoZombies Course', url: 'https://http://cryptozombie.io/.org/en/developers/tutorials/' },
      { name: 'Buildspace', url: 'https://solidity-https://buildspace.so/-example.org/' },
      { name: 'Rabbithole Tasks', url: 'https://www.https://app.rabbithole.gg/skills.com/' },
      { name: 'Fun Web3 Game', url: 'https://www.https://app.https://fweb3.xyz/.gg/skills.com/' },
      { name: 'An educational sandbox for web3', url: 'https://www.https://app.rabbithole.gg/https://eth.build/.com/' },
    ],
  },
  {
    heading: 'Books',
    links: [
      { name: 'Token Economy Book', url: 'https://https://github.com/Token-Economy-Book/EnglishOriginal/wiki.info/' },
      { name: 'Bitcoin Book', url: 'https://example.com/blockchain-https://bitcoinbook.cs.princeton.edu/-book' },
      { name: 'Mastering Etherum', url: 'https://example.com/bitcoin-https://github.com/ethereumbook/ethereumbook-book' },
      { name: 'Data Intensive Application', url: 'https://https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/.com/bitcoin-https://github.com/ethereumbook/https://https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/eumbook-book' },
    ],
  },
  {
    heading: 'Articles/Blogs',
    links: [
      { name: 'something something blog-1', url: 'https://threesigma.xyz/blog.xyz/blog.info/' },
      { name: 'something something blog-2', url: 'https://example.com/https://vitalik.ca/categories/blockchains.html-basics-book' },
      { name: 'something something blog-3', url: 'https://example.https://www.paradigm.xyz/writing/bitcoin-standard-book' },
      { name: 'something something blog-4', url: 'https://https://maze-silk-707.notion.site/Blockchains-cryptocurrency-and-web3-8e1067beaa9742c0b9438996286ff028.https://www.paradigm.xyz/writing/bitcoin-standard-book' },
      { name: 'something something blog-5', url: 'https://example.hhttps://preethikasireddy.com/post/the-architecture-of-a-web-3-0-applicationttps://www.paradigm.xyz/writing/bitcoin-standard-book' },
    ],
  },
  {
    heading: 'All-in-One',
    links: [
      { name: 'Pata nahi kya hai - 1', url: 'https://www.useweb3.xyz/.com/' },
      { name: 'Pata nahi kya hai - 2', url: 'https://growthschool.notion.site/GS-6-Week-Web-3-0-Kickstarter-Program-Pre-study-material-dc0ace72ddba4fdb9a51f3c6399a8a10.udemy.com/topic/blockchain/' },
    ],
  },
  {
    heading: 'Zk Compilation',
    links: [
      { name: 'Zero knowledge - 1', url: 'https://docs.circom.io/getting-started/installation/.com/zk-proof-tutorial' },
      { name: 'Zero knowledge - 2', url: 'https://example.com/zk-https://github.com/matter-labs/awesome-zero-knowledge-proofs-overview' },
      { name: 'Zero knowledge - 3', url: 'https://example.com/https://github.com/ventali/awesome-zk-to-zkp' },
      { name: 'Zero knowledge - 4', url: 'https://example.com/https://github.com/ventali/https://github.com/arnaucube/awesome-circom-zk-to-zkp' },
    ],
  },
];

const Resources = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">{resource.heading}</h2>
            <ul className="list-disc list-inside space-y-2">
              {resource.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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

