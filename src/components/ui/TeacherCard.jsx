import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function TeacherCard({ teacher }) {
  return (
    <>
      <div class="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
        <Link to={`/instructor/${teacher.id}`}>
          <img
            alt={teacher.name}
            class="rounded-full w-32 h-32 object-cover border-4 border-blue-500 mb-4"
            src={teacher.image}
          />
          <h3 class="text-xl font-semibold mb-1"> {teacher.name}</h3>
        </Link>
        <p class="text-gray-600 mb-4">{teacher.bio}</p>
        <div class="flex gap-4 text-blue-600 text-lg">
          <a
            href={teacher.social.instagram}
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
            href={teacher.social.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}

export default TeacherCard;
