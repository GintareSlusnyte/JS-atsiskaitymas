// export default class UserCard {
//     constructor(props) {
//       this.props = props;
//       return this.render();
//     }
//     render(){
//         this.cardDiv = document.createElement('div');
//         this.cardDiv.classList.add('user_card');

//         this.avatar = document.createElement('img');
//         avatar.setAtributte('src', this.props.avatar_url);
//         avatar.setAtributte('alt', `${this.props.login} avatar`);
//         cardDiv.appendChild(avatar);

//         this.login = document.createElement('p');
//         this.loginText = document.createTextNode(this.props.login);
//         cardDiv.appendChild(login);

//         return this.cardDiv
//     }
// }