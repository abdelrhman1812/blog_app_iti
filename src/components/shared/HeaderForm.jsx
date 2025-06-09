const HeaderForm = ({ title, description }) => {
  return (
    <>
      <h2 className="text-2xl text-base-content font-bold my-5">{title}</h2>
      <p className="text-neutral-content mb-8">{description}</p>
    </>
  );
};

export default HeaderForm;
