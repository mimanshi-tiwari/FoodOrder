const ContactUs = () => {
  return (
    <div className="flex w-9/12 justify-center items-center flex-col gap-4">
      <h1>Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 rounded p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded p-2 w-full"
        />
        <textarea
          placeholder="Message"
          className="border-2 border-gray-300 rounded p-2 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
