import { useState } from "react";
import AudioPlayer from "../../views/admin/editTheme/firstPane/AudioPlayer";
import { Image } from "antd";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import VideoModal from "../../views/admin/createPage/VideoModal";
import {generateUrlForMedia} from '../../utils'

const MediaBlock = ({
  name,
  image,
  audio,
  video
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="h-fit w-full rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 py-8">
      <h3 className="mb-3 w-full text-center text-2xl font-semibold">{name}</h3>
      <div className="flex flex-row justify-between px-12">
        {image && (
          <div className="flex flex-col justify-center gap-4">
            <Image
              width="4rem"
              height="4rem"
              src={generateUrlForMedia(image || '')}
              fallback="../../../../assets/broken-image.jpg"
            />
          </div>
        )}
        {audio && (
          <div className="flex flex-col justify-center gap-4">
            <AudioPlayer audioSrc={generateUrlForMedia(audio || '')} />
          </div>
        )}
        {video && (
          <div className="flex flex-col justify-center gap-4">
            <button
              type="button"
              title="view video"
              onClick={() => setShowVideoModal(true)}
              className="flex h-16 w-16 items-center justify-center rounded-md bg-[#ADB5BD] bg-opacity-50"
            >
              <MdOutlineSlowMotionVideo size={40} color="white" />
            </button>
          </div>
        )}
      </div>
      <VideoModal
        isOpen={showVideoModal}
        handleClose={() => setShowVideoModal(false)}
        url={generateUrlForMedia(video || '')}
      />
    </div>
  );
};

export default MediaBlock;
