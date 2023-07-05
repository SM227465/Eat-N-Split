import Friend from './Friend';

export default function FriendsList(props) {
  const { friends, onFriendSelect, selectedFriend } = props;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onFriendSelect={onFriendSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
