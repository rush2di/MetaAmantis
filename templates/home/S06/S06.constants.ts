import {
  _DOMAIN_NAME,
  _PROJECT_ABVR,
  _PROJECT_NAME,
} from "helpers/constants/common/metadata";

const TITLE = `F.A.Q`;

const FAQ_LIST = [
  {
    question: `How to mint our NFT?`,
    answer: `You will be able to mint an ${_PROJECT_NAME} NFT on ${_DOMAIN_NAME} website. When you click the mint button you will be redirected to our minting subpage. If you have our whitelist role, you will need to whitelist your Ethereum erc20 wallet (such as MetaMask) address, only then you are able to participate in the presale. Public sale will be open to everyone.

    We are constantly listening to our community and adjusting our roadmap to best serve all of our ${_PROJECT_ABVR} NFT holders. Our vision continues to evolve based on the input of our ecosystem, and in the future we'll have staking and DAO infrastructure available for our NFT holders.`,
  },
  {
    question: `When is the mint?`,
    answer: `PRESALE: 25/4/2022
    PUBLIC SALE: 27/4/2022`,
  },
  {
    question: `How much will mint be?`,
    answer: `PRESALE: 0.9 SOL
    PUBLIC SALE: 1.2 SOL`,
  },
  {
    question: `How many can you min?`,
    answer: `You will be able to mint 2 NFTs on presale and 2 NFTs on public sale. If you are whitelisted you are guaranteed to get the NFT.`,
  },
  {
    question: `How can I get whitelisted?`,
    answer: `Because we want to create a genuine and close-knit community, we don’t give WL roles for leveling on discord. We have a worldwide moderation team which is giving out WL roles to people who are genuinely interacting with others, making fan-art & contributing to the ${_PROJECT_ABVR} community.`,
  },
  {
    question: `Which blockchain are you using?`,
    answer: `Our NFTs will be stored as tokens on Solana blockchain, while avatar pictures are stored on IPFS.`,
  },
  {
    question: `What can ${_PROJECT_ABVR} NFT holders expect in the future?`,
    answer: `We are constantly listening to our community & like we already pointed out, our vision & plan is not final. Having said that, we will be creating an ecosystem for ${_PROJECT_ABVR} NFT holders - staking & DAO.`,
  },
];

export { TITLE, FAQ_LIST };
