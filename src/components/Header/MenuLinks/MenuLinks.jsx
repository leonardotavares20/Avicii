import MessageBallonCard from "../../UI/MessageBalloonCard/MessageBallonCard";

export default function MenuLinks() {
  return (
    <>
      <menu className="flex text-menu justify-center font-bold h-8 tracking-normal gap-x-14 items-center">
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
            <MessageBallonCard />
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
