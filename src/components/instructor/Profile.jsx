import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Profile({ teacher }) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-40 h-40 object-cover rounded-full shadow"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800"> {teacher.name}</h2>
          <p className="text-gray-600 leading-loose whitespace-pre-line">
            {teacher.bio}
          </p>
          <div className="flex gap-4 text-xl text-gray-600 mt-2">
            <a href={teacher.social.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href={teacher.social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a
              href="https://twitter.com/maryamdev"
              target="_blank"
              rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
