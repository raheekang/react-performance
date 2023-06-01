# React-App 성능개선

<img width="1231" alt="image" src="https://github.com/raheekang/react-performance/assets/134080499/ca6b0a5d-9e9e-42ff-82db-389ab591c1d5">


<aside>
📌 React.memo 적용

</aside>

- react는 먼저 컴포넌트를 렌더링 한 뒤, 이전에 렌더링 딘 결과와 비교하여 DOM 업데이트를 결정
    
    만약 렌더링 결과가 이전과 다르다면, react는 DOM을 업데이트 함
    
- 이 과정에서 만약 컴포넌트가 react.memo()로 둘러 쌓여 있다면, react는 컴포넌트를 렌더링하고 결과를  메모이징함 > 다음 렌더링이 일어날 때 렌더링하는 컴포넌트의 props가 같다면, react는 메모이징 된 내용을 재사용

❓메모제이션 (Memoization) : memoization은 주어진 입력값에 대한 결과를 저장함으로써 같은 입력값에 대해 함수가 한 번만 실행되는 것을 보장

React.memo 적용은 간단하게 원하는 컴포넌트를 감싸주면 됨

적용 후 profiler 확인 시 렌더링이 필요하지 않은 List, ListItem 컴포넌트는 렌더링이 안 되는 걸 확인 

<img width="732" alt="image" src="https://github.com/raheekang/react-performance/assets/134080499/9048e1fc-f91a-4db7-8dee-e4692513f2df">

- B컴포넌트의 렌더링 속도가 향상한 것을 볼 수 있음

React Memo 사용을 지양해야하는 상황

- 렌더링 될 때 props가 다른 경우가 대부분인 컴포넌트를 생각하면 메모이제이션 기법의 이점을 얻기 힘듬
- props가 자주 변하는 컴포넌트를 react.memo로 래핑 할지라도, react는 두 가지 작업을 리 렌더링 할 때마다 수행함

📌 리액트에서 렌더링 성능을 최적화 위해선 react 컴포넌트를 분리하며, react.memo 를 사용하면 됨. 또한 react.memo 사용은 항상 좋은 것은 아니기에 profiler를 이용해서 성능상 이점이 있는지 확인 후 사용

- jsonplaceholder
    
    JSONPlaceholder는 가짜 데이터가 필요할 때마다 사용할 수 있는 무료 온라인 REST API
    
    posts, users, photos 등 여러 가지 가짜 데이터를 가져올 수 있음
