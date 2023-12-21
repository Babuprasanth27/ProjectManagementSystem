// const Footer = () => {
//   return (
//     <footer className="text-center py-10 text-slate-500">
//       <p>
//         &copy; {new Date().getFullYear()} ProjectManagementSystem &mdash; All rights reserved
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center py-10 text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} ProjectManagementSystem &mdash; All rights reserved
      </p>
      <div className="mt-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/your-github-repository"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 mx-2"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {/* Discord Icon */}
        <a
          href="https://discord.gg/your-discord-server"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 mx-2"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
