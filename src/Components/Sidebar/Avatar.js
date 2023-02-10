import { Image } from 'react-bulma-components';

import avatar from '../../assets/eli-avatar.png';

const Avatar = () => {
	return <Image src={avatar} rounded size={128} backgroundColor="white" style={{ borderRadius: '50%' }} />;
};

export default Avatar;
