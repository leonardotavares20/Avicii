import MessageBallonForm from "../../UI/MessageBalloonCard/MessageBallonForm";

export default function MenuLinks() {
  return (
    <>
      <menu className="flex justify-center font-bold h-8 tracking-menu gap-x-10 items-center">
        <li>
          <a
            className="text-white transition duration-400 ease-in-out hover:text-gray-400"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tim Bergling Foundation
          </a>
        </li>
        <li>
          <a
            className="text-white transition duration-400 ease-in-out hover:text-gray-400"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avicii Experience
          </a>
        </li>
        <li>
          <div className="text-white transition duration-400 ease-in-out hover:text-gray-400">
            <MessageBallonForm />
          </div>
        </li>
        <li>
          <a
            className="text-white transition duration-400 ease-in-out hover:text-gray-400"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </li>
      </menu>
    </>
  );
}
