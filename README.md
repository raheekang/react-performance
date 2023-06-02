# React-App 성능개선

<aside>
✔️ 기획의도

</aside>

- react profiler 플러그인을 통해 애플리케이션의 성능을 분석하고 최적화하기 위한 도구를 사용하여 렌더링과 업데이트에 소비되는 시간을 추적하고 분석할 수 있도록 하는 기능을 알아보기 위하여 기획하게 되었음
- 성능 저하의 원인이 되는 부분을 식별하고 최적화하는 데 도움을 주며 이를 사용하여 어떤 컴포넌트가 렌더링되었는지, 얼마나 자주 렌더링되는지, 그리고 각 렌더링 작업이 소요하는 시간을 확인해보기 위함

<aside>
✔️ 이미지 및 분석

</aside>

<img width="1403" alt="ab_code" src="https://github.com/raheekang/react-performance/assets/134080499/5c7b287d-6117-4b24-81c0-894918904128">


- A component와 B component 비교를 위한 코드 작성

<img width="1241" alt="ab_google" src="https://github.com/raheekang/react-performance/assets/134080499/eddc2a52-2f4e-436f-b13d-e60b13906714">

<img width="732" alt="ab_profiler" src="https://github.com/raheekang/react-performance/assets/134080499/219a1973-e9cc-4c5f-ad56-da173b1508e4">

- 위와 같이 A component와 B component의 차이를 profiler를 통해 확인 할 수 있으며 성능과 시간차를 세밀하게 볼 수 있음
- 

<aside>
📌 A component

</aside>

- 위와 같이 A component는 모든 요소를 하나의 컴포넌트에 작성하였음
- input에 새로운 값을 입력 시 불필요한 렌더링 작업이 발생하고 있음
- 코드 상에 문제는 없지만 리액트에서 렌더링 성능 최적화를 위해선 react 컴포넌트를 분리하여 작성하는 것이 불필요한 렌더링을 막을 수 있음

<aside>
📌 B component

</aside>

- B component는 List, ListItem, Message 컴포넌트로 나눠져있으며, 이는 코드의 재사용성을 위해서도 있지만 각 컴포넌트의 렌더링을 최적화 하기 위함
- react.memo를 적용하여 렌더링이 필요하지 않은 List, ListItem 컴포넌트는 렌더링이 안 되는 걸 확인
- input에서 글을 타이밍 할 때 Message 컴포넌트와 그 state값을 가지고 있는 app 컴포넌트만 렌더링되도록 함
- profiler를 통해 B component의 속도가 향상한 것을 볼 수 있음

<aside>
⚠️ react.memo 사용을 지양해야 할 때

</aside>

- 컴포넌트가 렌더링 될 때 props가 다른 경우가 대부분인 컴포넌트 일 경우 메모이제이션의 이점을 얻기 힘듬
- props가 자주 변하는 컴포넌트를 react.memo로 래핑 할지라도, react는 두 가지 작업을 리렌더링 할 때마다 수행함
- 리액트에서 렌더링 성능 최적화를 위해선 react 컴포넌트를 분리하여 react.memo 를 사용하면 됨
- react.memo 사용은 항상 좋은 것은 아니기에 profiler 를 이용하여 성능상 이점이 있는지 확인 후 사용
