import PropTypes from "prop-types";
function Button(props) {
  return (
    <div className="px-2 py-1 bg-yellow rounded-lg text-center h-fit text-red font-bold cursor-pointer">
      {props.btnText}
    </div>
  );
}

export default Button;

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
