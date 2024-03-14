import parse from "html-react-parser";

import TweetOptions from "./TweetOptions";

function TweetImage(props) {
  if (props.imageSrc) {
    return (
      <>
        <div className="md:flex-shrink pr-6 pt-3">
          <img
            className="rounded-lg w-full h-64"
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </div>
      </>
    );
  }
  return null;
}

function TweetBody(props) {
  const body = props.tweet;
  return parse(body);
}

export default function Tweet(props) {
  return (
    <>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {/* Sonali Hirave */}
                {props.name + " "}
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {/* @ShonaDesign . 16 April */}
                  {props.username} . {props.date}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          <TweetBody tweet={props.tweet} /> [{props.stat1}/{props.stat2}]
          <span className="text-blue-400"> {props.tags}</span>
        </p>
        <TweetImage imageSrc={props.imageSrc} imageAlt={props.imageAlt} />
        <div className="flex">
          <div className="w-full">
            <TweetOptions />
          </div>
        </div>
      </div>
    </>
  );
}
