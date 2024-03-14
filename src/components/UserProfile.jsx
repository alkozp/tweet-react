export default function UserProfile({ user }) {
  return (
    <a href="#" className="flex-shrink-0 group block">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={user.image}
            alt
          />
        </div>
        <div className="ml-3">
          <p className="text-base leading-6 font-medium text-white">
            {user.name}
          </p>
          <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
            {user.username}
          </p>
        </div>
      </div>
    </a>
  );
}
