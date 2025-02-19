import macbookImg from "../assets/macbook.png";
import logoImg from "../assets/logo.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 py-8">
      <div className="max-w-[1080px] mx-auto ">
        <div className="w-[80%] mx-auto relative text-black">
          <img src={macbookImg} className=" mx-auto" alt="" />
          <div className="w-[74%] h-[72%] bg-stone-300 absolute top-[14.5%] left-[13.1%] p-4 flex gap-8">
            <div className="w-6/10">
              <h2 className="mb-4 uppercase font-bold text-xl">Leave a message</h2>
              <form action="https://formsubmit.co/alfaro.rodriguez.jaime@gmail.com" method="POST">
                <label htmlFor="name_input">Name *</label>
                <input
                  id="name_input"
                  type="text"
                  placeholder="Harrison Wells"
                  className="bg-stone-100 rounded-md py-1 px-2 w-full mb-3"
                  required
                />
                <label htmlFor="email_input">Email *</label>
                <input
                  id="email_input"
                  type="email"
                  placeholder="harrison.wells@starlabs.com"
                  className="bg-stone-100 mb-3 rounded-md py-1 px-2 w-full"
                  required
                />
                <label htmlFor="message_input">Message *</label>
                <textarea
                  id="message_input"
                  placeholder="Hi, im interested in your skills! Please reach out to this email."
                  className="bg-stone-100 mb-3 rounded-md py-1 px-2 w-full resize-none h-[10%]"
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-500 rounded-md px-4 py-2 text-white font-bold cursor-pointer hover:bg-emerald-800 transition-all"
                >
                  Send message
                </button>
              </form>
            </div>
            <div className="w-3/10 mt-4">
              <img
                src={logoImg}
                alt="Logo"
                className="border-4 border-emerald-500 rounded-full p-2 overflow-clip h-auto max-w-28 mx-auto mb-3"
              />
              <div className="w-full font-bold h-auto bg-emerald-500 text-white px-4 py-2 rounded-md">
                <p className="py-2 border-b-2 border-dashed">Jaime Alfaro</p>
                <p className="py-2">Guadalajara, Jal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
