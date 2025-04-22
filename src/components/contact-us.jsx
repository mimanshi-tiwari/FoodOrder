const ContactUs = () => {
  return (
    <div className="flex w-2xl h-[90vh] flex-col gap-4 p-6">
      <div className="font-medium">Contact Us</div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-[#463e2d] rounded h-8 p-2 text-xs focus:border-[#463e2d]"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-[#463e2d] rounded h-8 p-2 text-xs"
        />
        <textarea
          placeholder="Message"
          className="border border-[#463e2d] rounded h-16 p-2 text-xs"
        ></textarea>
        <button
          type="button"
          className="rounded h-8 p-2 flex items-center text-white bg-[#463e2d] font-normal text-xs justify-center cursor-pointer dark:bg-gray-900 dark:text-white"
          onClick={(e) => {e.stopPropagation()}}
          >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
