import Button from "./Button";

function Navbar() {
  return (
    <nav className="w-auto h-fit bg-red flex justify-between">
      <div className="mx-2 my-2">
        <div className="flex items-center">
          <img
            src="src\images\mb.jpg"
            width="50px"
            height="50px"
            alt="logo-img"
          />
          <h1 className="text-orange text-6xl font-Merienda">MealBoxX</h1>
        </div>
        <p className="text-yellow">
          Delivering Customized meals to your DoorStep!
        </p>
        <div className="flex gap-3 mt-3 ">
          <Button btnText="HOME" />
          <Button btnText="MEALPLANS" />
          <Button btnText="BLANK" />
          <Button btnText="BLANK" />
          <Button btnText="BLANK" />
          <Button btnText="BLANK" />
          <Button btnText="BLANK" />
          <Button btnText="BLANK" />
        </div>
      </div>
      <div className="mx-2 my-2 flex gap-3 ">
        <Button btnText="LOGIN" classname="mx-1" />
        <Button btnText="SIGNUP" />
      </div>
    </nav>
  );
}

export default Navbar;
