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