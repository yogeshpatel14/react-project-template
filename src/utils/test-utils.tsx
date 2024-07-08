import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "store";
import { MainThemeProvider } from "themes";
import i18n from "locals-i18n";

const renderComponent = ({ children }: { children: JSX.Element }) => {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <I18nextProvider i18n={i18n} defaultNS="translation">
          {children}
        </I18nextProvider>
      </MainThemeProvider>
    </Provider>
  );
};

export * from "@testing-library/react";

export default renderComponent;
