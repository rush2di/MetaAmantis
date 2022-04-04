import styles from "./BSC.module.scss";

const { cardBSC, cardBSC__line } = styles;

const BSCCard = () => {
  return (
    <div className={cardBSC}>
      <div className="d-flex align-center justify-between w-100">
        <p className="txt color-label">
          Powered <br />
          By
        </p>
        <hr className={cardBSC__line} />
        <img src="assets/images/SOL.svg" alt="Solana - Solana Blockchain" />
      </div>
    </div>
  );
};

export default BSCCard;
