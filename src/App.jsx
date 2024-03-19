import ComponentContainer from "./components/ComponentContainer";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";
import { MdLocalPhone, MdLock } from "react-icons/md";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="main__title">Inputs</div>
        {/*<Input />*/}
        <div className="main__content">
          <div className="main__content__row">
            <ComponentContainer
              tag
              title="<Input />"
              children={() => <Input label="Label" placeholder="Placeholder" />}
            />

            <ComponentContainer
              title="&:hover"
              children={() => <Input label="Label" placeholder="Placeholder" />}
            />

            <ComponentContainer
              title="&:focus"
              children={() => <Input label="Label" placeholder="Placeholder" />}
            />
          </div>
          {/*<Input error />*/}
          <div className="main__content__row">
            <ComponentContainer
              tag
              title="<Input error/>"
              children={() => (
                <Input error label="Label" placeholder="Placeholder" />
              )}
            />

            <ComponentContainer
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
            />
          </div>

          {/*<Input disabled />*/}
          <div className="main__content__row">
            <ComponentContainer
              tag
              title="<Input disabled />"
              children={() => (
                <Input disabled label="Label" placeholder="Placeholder" />
              )}
            />
          </div>

          {/*<Input helperText=”Some interesting text” />*/}
          <div className="main__content__row">
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
          <div className="main__content__row">
            <ComponentContainer
              tag
              title="<Input startIcon />"
              children={() => (
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  startIcon={() => <MdLocalPhone size={18} />}
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
                  endIcon={() => <MdLock size={18} />}
                />
              )}
            />
          </div>

          {/*value*/}
          <div className="main__content__row">
            <ComponentContainer
              tag
              title="<Input value=”text” />"
              children={() => (
                <Input label="Label" placeholder="Placeholder" value="Text" />
              )}
            />
          </div>

          {/*<Input size=”sm” />*/}
          <div className="main__content__row">
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
          <div className="main__content__row fill">
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
          <div className="main__content__row">
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
