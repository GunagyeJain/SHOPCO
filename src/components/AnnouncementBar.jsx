const AnnouncementBar = () => {
  return (
    <div className="flex h-[34px] w-screen items-center justify-center bg-black text-white md:h-[38px]">
      <div>
        Sign up and get 20% off to your first order.
        <a className="ml-1 underline" href="#signup">
          Sign Up Now
        </a>
      </div>
      <button className="invisible fixed right-10 cursor-pointer md:visible">
        &times;
      </button>
    </div>
  );
};

export default AnnouncementBar;
