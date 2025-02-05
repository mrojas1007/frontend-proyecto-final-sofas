
const CustomButton = ({text, onClickCallback, type}) => (
    <button onClick={onClickCallback} style={styles(type).button}>{text}</button>
);

export default CustomButton;