# design-system

디자인 시스템에 대한 전반적인 학습을 진행하는 리포지토리.
우선 Storybook을 이용해 디자인 시스템을 제작하는 것으로 시작한다.

### 22.07.26

타입스크립트에서 emotion 적용하면서 타입 에러를 맞추는 과정을 잘 숙지하자.
tsconfig.json을 잘 이용해야 한다.

기본적인 스토리북 사용에 대한 예제를 얼추 만들었다.

UI 인벤토리를 먼저 제작한 이후 추가적인 컴포넌트 제작을 진행하자.

### 22.08.03

최근 확진자 발생으로 격리 생활관을 쓴다 뭐다 말이 많아서 공부연등 시간에 컴퓨터 자체를 사용하지 못했다.

기본적인 몇몇 컴포넌트들에 대한 디자인 제작을 완료했으므로 Storybook을 이용해서 UI 컴포넌트를 띄워보자.

에...ts 내에서 svg를 적용하는 방법을 연구하고 있다. 타입을 따로 지정해주어야할 것 같다. 다음에 마저 해보자.

아직도 storybook에서 svg를 적용하는 방법을 찾지 못했다. 나중에 다시 해보자...

### 22.08.04

수많은 시도와 다양한 방법 끝에 svg 아이콘을 사용할 방법을 찾았다.

일단 svg 파일을 따로 import 하는 방법은 다 원인모를 불가능이라고 판단...했고

Icon 컴포넌트를 따로 제작하여 이곳에 svg 파일을 하드코딩하여 저장해두는 방식으로 진행했다.
variation에 따라 다양한 Icon들을 이 컴포넌트 파일 내에 저장해두고 type이 지정되는 대로 해당 아이콘을 불러오는 방식을 택했다...!
조금 더 수정한 뒤에 merge 진행하자.

다양한 icon들에 대한 svg를 넣고 수정해봅시다!

### 22.08.06

큐큐 격리생활관 풀려서 다시 컴퓨터 사용한다...!

참고로 해커톤 신청이 2주 정도 밀렸다. 찬찬히 준비하자.

Accordion에 대한 컴포넌트와 스토리 추가 완료.

브레드크럼을 렌더링하는 데에 어려움을 겪고 있다. JSX.Element에 대한 타입을 지정해주기가 쉽지 않다... 다시 해보자!

브레드크럼 렌더링을 어느 정도 마무리하였다. 인라인 태그와 블록 태그를 잘 이용하는 것은 언제나 어렵다. 
자식 요소들의 width를 따라가는 컴포넌트를 어떻게 만드는 건지... 나중에 기회가 되면 알아보도록 하자..!!

### 22.08.07

Card와 Dropdown에 대한 구현을 마쳤다. 남은 일은 Picker와 Sidebar 정도...!

다 구현을 하고 나면 다른 컴포넌트들이랑 메뉴 아이콘, 토글버튼 등을 figma에 디자인하도록 하자.\

Dropdown에 대한 스토리를 어떻게 구현할지도 생각하자.

광복절까지 1차 배포를 완료하도록 노력해보자!!

### 22.08.08

gooey effect를 이용해서 react 컴포넌트들의 애니메이션을 부드럽게 적용할 수 있다.

다만 이 effect는 svg 자체에는 적용이 어려워 보인다...
따라서 기본 png 그림들을 불러오거나 직접 오브젝트를 만들어서 크기를 작게 하여 해상도 문제가 없도록 한 뒤
gooey effect를 적용해보도록 하자!!

### 22.08.10

input 컴포넌트에 대한 스토리들을 figma에 제작하고 이를 코드로 구현하는 중이다.
현재 password까지의 컴포넌트를 완성했다.

전화번호 입력을 정규표현식으로 제어하는 방법과
password를 보이고 안 보이도록 하는 mouseDown, mouseUp 이벤트를 기억해두자.

### 22.08.11

input 컴포넌트에 대한 구현을 모두 마쳤다.

Multi Selecte Input은 Dropdown 컴포넌트에 스토리로 추가하여 구현할 예정이고,
Number Only Input은 Phone Number Input에 정규표현식만 수정하여 구현할 예정이다.
일단 Number Only Input같은 경우 카드 번호를 입력받을 일이 당장 있는 것이 아니기에 다음에 구현할 예정이다.

우여곡절 끝에 Multi Select Input까지 제작을 완료했다. 디자인하면서 오류가 적어지고 시간이 빨라지는 걸 보면 이제 css나 flex에 대한 기본적인 요소는 충분히 익히고 숙달한 것 같다는 생각이 든다.

input 컴포넌트를 가지고 기본적인 form 예제를 만들었다.

확실히 끌어다 쓰니 만들기 쉽고 디자인이 한결같아 좋다.

다만 아직 Button에 대한 variation이 많이 존재하지 않는 것 같다.
더 세부적으로 구체화하여 제작하도록 해보자!!

### 22.08.12

LoginForm에서 Form 태그는 포함시키지 않았다. 나중에 직접 감싸도록 하자.