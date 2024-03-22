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
              children={() => <Input label="Label" placeholder="Placeholder" />}
            />

            {/* <ComponentContainer
              title="&:hover"
              children={() => <Input label="Label" placeholder="Placeholder" />}
            />

            <ComponentContainer
              title="&:focus"
              children={() => <Input label="Label" placeholder="Placeholder" />}
            /> */}
          </div>
          {/*<Input error />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input error/>"
              children={() => (
                <Input error label="Label" placeholder="Placeholder" />
              )}
            />

            {/* <ComponentContainer
              title="&:hover"
              children={() => (
                <Input error label="Label" placeholder="Placeholder" />
              )}
            />

            <ComponentContainer
              title="&:focus"
              children={() => (
                <Input error label="Label" placeholder="Placeholder" />
              )}
            /> */}
          </div>

          {/*<Input disabled />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input disabled />"
              children={() => (
                <Input disabled label="Label" placeholder="Placeholder" />
              )}
            />
          </div>

          {/*<Input helperText=”Some interesting text” />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input helperText=”Some interesting text” />"
              children={() => (
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Some interesting text"
                />
              )}
            />

            <ComponentContainer
              tag
              title="<Input helperText=”Some interesting text” error />"
              children={() => (
                <Input
                  error
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Some interesting text"
                />
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
                  label="Label"
                  placeholder="Placeholder"
                  startIcon={() => (
                    <span class="material-symbols-outlined">call</span>
                  )}
                />
              )}
            />

            <ComponentContainer
              tag
              title="<Input endIcon />"
              children={() => (
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  endIcon={() => (
                    <span class="material-symbols-outlined">lock</span>
                  )}
                />
              )}
            />
          </div>

          {/*value*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input value=”text” />"
              children={() => (
                <Input label="Label" placeholder="Placeholder" value="Text" />
              )}
            />
          </div>

          {/*<Input size=”sm” />*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input size=”sm” />"
              children={() => (
                <Input label="Label" placeholder="Placeholder" size="sm" />
              )}
            />
            <ComponentContainer
              tag
              title="<Input size=”md” />"
              children={() => (
                <Input label="Label" placeholder="Placeholder" size="md" />
              )}
            />
          </div>

          {/*fullWidth*/}
          <div className="row fill">
            <ComponentContainer
              tag
              title="<Input fullWidth />"
              children={() => (
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  fullWidth
                  value="Text"
                />
              )}
            />
          </div>

          {/*multiline*/}
          <div className="row">
            <ComponentContainer
              tag
              title="<Input multiline row=”4” />"
              children={() => (
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  multiline
                  row="4"
                />
              )}
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
