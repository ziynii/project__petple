
### │ 소개

반려동물을 키우는 사람들의 공간으로 자유롭게 게시글을 작성할 수 있고 

목적에 맞는 소규모의 채팅형식 커뮤니티를 만들어 정보를 공유할 수 있습니다

<br />

### │ Link

**🔗 github**

[https://github.com/ziynii/project__petple](https://github.com/ziynii/project__petple)

🔗 **project site**

[https://petple-b2f50.web.app/?#/](https://petple-b2f50.web.app/?#/)

😊 테스트용 아이디와 비밀번호: testid@naver.com   /   testpassword

<br />


### │ 주요기능

1. 이메일과 기존 sns계정을 이용한 회원가입과 로그인 기능
2. 글쓰기와 수정 및 삭제, 글에 대한 좋아요와 댓글 기능
3. 프로필 사진과 이름 변경 기능
4. 채팅방 개설 및 채팅 기능 


<br />


### │ 추가할 기능

1. 좋아요 취소
2. 채팅방 나가기
3. 댓글 삭제


<br />


### │ Skill

🔸 **React**

 React와 react-router-dom을 이용해 SPA 웹 어플리케이션을 제작했습니다

🔸 **SCSS**

 SCSS로 스타일 작업을 진행했습니다

🔸 **Firebase**

 Firebase의 database, storage, hosting, auth 기능을 이용해 로그인 등의 기능을 개발했습니다

🔸  **React helmet**

 React-helmet을 이용해 페이지 이동시 타이틀이 변경되도록 제작했습니다

<br />

### │ 주요 기능

**🔸 회원가입 / 로그인**

 <p>
  <img src="https://user-images.githubusercontent.com/85431762/180138659-c69c94f9-22dc-413d-84ca-7eb3ffc30b07.png" alt="초기화면" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180138763-93ea1afc-74f3-4d31-8a6a-d409c9817de6.png" alt="회원가입" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180139256-8efc25db-280b-4dc7-a21d-f55cbe8cc25d.png" alt="로그인" width="250px"/>
 </p>
 

<br />


🔸 **홈**

 <p>
  <img src="https://user-images.githubusercontent.com/85431762/180151035-7b0af067-a585-41c4-8018-76c5b4b3e653.png" alt="홈" width="250px"/>
 </p>

<br />


🔸 **놀이터**

 <p>
  <img src="https://user-images.githubusercontent.com/85431762/180151301-2264e7e9-1427-46b5-8434-fe3e2efcea1f.png" alt="놀이터 글 전체보기" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180151499-b8383c24-b522-49e0-99c5-72779fe91ea8.png" alt="놀이터 글 자세히보기" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180151663-cc278484-452b-4c0e-84da-503b6aa37a0b.png" alt="놀이터 글 쓰기" width="250px"/>
 </p>

<br />

🔸 **커뮤니티**

 <p>
  <img src="https://user-images.githubusercontent.com/85431762/180151991-c721f19a-4a10-47cd-9fda-851df94cdc2f.png" alt="커뮤니티 전체보기" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180152144-5e51d719-9c09-4224-8c1f-2837443fd972.png" alt="커뮤니티 채팅방" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180152248-8f951ff4-6e53-46c0-b688-e1598e07d157.png" alt="로그인" width="250px"/>
 </p>
 
 <br />


🔸 **마이페이지**


 <p>
  <img src="https://user-images.githubusercontent.com/85431762/180152396-576971aa-3648-4afb-b888-ed287926c6c2.png" alt="마이페이지" width="250px"/>
  <img src="https://user-images.githubusercontent.com/85431762/180152462-130dce7b-7137-4590-b965-b20d98294249.png" alt="프로필 " width="250px"/>
 </p>
<Br />

### 🌟 Error & Solution

☑️ **firebase Permission error**

**[ ERROR ]**

firebase를 사용하며 DB 권한에 대한 error message를 받았습니다.

**[ SOLUTION ]**

데이터베이스의 규칙을 설정하지 않아 생긴 에러였고, 데이터베이스 컬렉션의 사용 목적에 따라 읽기, 쓰기 권한을 따로 줄 수 있다는 점과 규칙을 관리하는 방법을 알게 되었습니다 


<Br />

☑️ **데이터 수정시 새로고침**

**[ ERROR ]**

프로필 정보 변경 시 마이페이지의 사용자 정보가 즉각적으로 업데이트되지 않는 문제가 있었습니다.

**[ SOLUTION ]**

**window.location.reload()** 를 사용해 강제 새로고침이 되도록 설정해 두었고 강제 새로고침이 아닌 다른 방법을 찾는 중입니다 

<Br />

☑️ **react-helmet warning**

**[ ERROR ]**

 react-helmet 사용 중 아래와 같은 메시지를 받았습니다.

<aside>

> ⚠️ Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code

</aside>

**[ SOLUTION ]**

strict mode에서는 UNSAFE_componentWillMount를 사용하는 것을 권장하지 않는다는 내용이었고 react-helmet-async로 라이브러리를 대체해 해결하였습니다
