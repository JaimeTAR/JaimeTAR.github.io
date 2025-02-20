import macbookImg from "../assets/macbook.png";
import logoImg from "../assets/logo.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 pt-8 pb-3 lg:py-8">
      <div className="max-w-[1080px] mx-auto ">
        <div className="w-[80%] mx-auto relative lg:text-black">
          <img src={macbookImg} className="hidden lg:block lg:mx-auto" alt="" />
          <div className="lg:w-[74%] lg:h-[72%] lg:bg-stone-300 lg:absolute top-[14.5%] lg:left-[13.1%] lg:p-4 lg:flex lg:gap-8">
            <div className="lg:w-6/10">
              <h2 className="mb-4 lg:uppercase font-bold text-xl">Leave a message</h2>
              <form action="https://formsubmit.co/bcd36d497f9a8d2ff136747ffd80ec88" method="POST">
                <input type="hidden" name="_format" value="json" />
                <input type="hidden" name="_template" value="table" />
                <label htmlFor="name_input">Name *</label>
                <input
                  id="name_input"
                  type="text"
                  name="name"
                  placeholder="Harrison Wells"
                  className="bg-stone-100 mb-3 rounded-md py-1 px-2 w-full text-black"
                  required
                />
                <label htmlFor="email_input">Email *</label>
                <input
                  id="email_input"
                  type="email"
                  name="email"
                  placeholder="harrison.wells@starlabs.com"
                  className="bg-stone-100 mb-3 rounded-md py-1 px-2 w-full text-black"
                  required
                />
                <label htmlFor="message_input">Message *</label>
                <textarea
                  name="message"
                  id="message_input"
                  placeholder="Hi, im interested in your skills! Please reach out to this email."
                  className="bg-stone-100 mb-3 rounded-md py-1 px-2 w-full resize-none lg:h-[10%] h-24 text-black"
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
                className="hidden lg:block border-4 border-emerald-500 rounded-full p-2 overflow-clip h-auto max-w-28 mx-auto mb-3"
              />
              <div className="hidden lg:block w-full font-bold h-auto bg-emerald-500 text-white px-4 py-2 rounded-md">
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
