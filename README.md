# React-App 성능개선

<img width="1296" alt="image" src="https://github.com/raheekang/react-performance/assets/134080499/d069dc1c-caf8-4ca6-9ccb-e4b559eb099b">

<img width="1231" alt="image" src="https://github.com/raheekang/react-performance/assets/134080499/ca6b0a5d-9e9e-42ff-82db-389ab591c1d5">

<aside>
📌 React Developer Tools

</aside>

- React Profiler
    
    react profiler는 react 16.5에서 새로운 DevTools 프로파일러 플러그인에 대한 지원 추가 이 플러그인은 react의 profiler API를 사용하여 react 애플리케이션의 성능 병목 현상을 식별하기 위해 렌더링되는 각 구성요소에 대한 타이밍 정보를 수집
    
- useEffect
    
    컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 HOOK 여기서 app컴포넌트가 한번 렌더링 된 후에 jsonplaceholder라는 곳의 서버가 비동기 요청을 보내서 posts 데이터를 가져오기 위해서 사용 됨
    
    useEffect 는 **메모이제이션 된 함수를 반환하는 함수**
    
    적용 방법은 usecallback 안에 콜백함수와 의존성 배열을 순서대로 넣어주면 됨
    
- fetch() 메소드
    
    원격 API에 요청을 보내기 위해 사용할 수 있는 메소드
    
    전역 fetch() 메소드는 네트워크에서 리소스를 가져오는 프로세스를 시작하여 response 응답을 사용할 수 있게 되면 이행된 promise 약속을 return 반환합니다.
    
- jsonplaceholder
    
    JSONPlaceholder는 가짜 데이터가 필요할 때마다 사용할 수 있는 무료 온라인 REST API
    
    posts, users, photos 등 여러 가지 가짜 데이터를 가져올 수 있음
    

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
