import ComponentContainer from "./components/ComponentContainer";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="title">Inputs</div>
        {/*<Input />*/}
        <div className="content">
          <div className="row">
            <ComponentContainer
              tag
              title="<Input />"
              children={() => <Input />}
            />

            {/* <ComponentContainer
              title="&:hover"
              children={() => <Input  />}
            />

            <ComponentContainer
              title="&:focus"
              children={() => <Input  />}
            /> */}
          </div>
          {/*<Input error />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input error/>"
              children={() => <Input error />}
            />

            {/* <ComponentContainer
              title="&:hover"
              children={() => (
                <Input error  />
              )}
            />

            <ComponentContainer
              title="&:focus"
              children={() => (
                <Input error  />
              )}
            /> */}
          </div>

          {/*<Input disabled />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input disabled />"
              children={() => <Input disabled />}
            />
          </div>

          {/*<Input helperText=”Some interesting text” />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input helperText=”Some interesting text” />"
              children={() => <Input helperText="Some interesting text" />}
            />

            <ComponentContainer
              tag
              title="<Input helperText=”Some interesting text” error />"
              children={() => (
                <Input error helperText="Some interesting text" />
              )}
            />
          </div>

          {/*icon*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input startIcon />"
              children={() => (
                <Input
                  startIcon={
                    <span class="material-symbols-outlined">call</span>
                  }
                />
              )}
            />

            <ComponentContainer
              tag
              title="<Input endIcon />"
              children={() => (
                <Input
                  endIcon={<span class="material-symbols-outlined">lock</span>}
                />
              )}
            />
          </div>

          {/*value*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input value=”text” />"
              children={() => <Input value="Text" />}
            />
          </div>

          {/*<Input size=”sm” />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input size=”sm” />"
              children={() => <Input size="sm" />}
            />
            <ComponentContainer
              tag
              title="<Input size=”md” />"
              children={() => <Input size="md" />}
            />
          </div>

          {/*fullWidth*/}
          <div className="row fill">
            <ComponentContainer
              tag
              title="<Input fullWidth />"
              children={() => <Input fullWidth value="Text" />}
            />
          </div>

          {/*multiline*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input multiline row=”4” />"
              children={() => <Input multiline row="4" />}
            />
          </div>
        </div>

        <div id="footer">
          created by <b>Nguyen Ngoc Trinh</b> - devChallenges.io
        </div>
      </div>
    </div>
  );
}

export default App;
