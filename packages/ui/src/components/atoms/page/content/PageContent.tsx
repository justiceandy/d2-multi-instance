import {     
    FormPage,
    FormOverlayPage,
    OverlayPage,
    Page,
    ContentContainer, 
} from './PageContent.styled';

import {
    PageContentArgs
} from './PageContent.d';

export default function PageContent({ children, form = false, overlay = false, container = true }:PageContentArgs)  {

    if(form && !overlay) {
        return (
            <FormPage>
             { container ? 
                 <ContentContainer children={children} />
                : children }
            </FormPage>
        )
    }
    if(overlay && form) {
        return (
            <FormOverlayPage>
              { container ? 
                 <ContentContainer children={children} />
                : children }
            </FormOverlayPage>
        )
    }
    if(overlay && !form) {
        return (
            <OverlayPage>
              { container ? 
                 <ContentContainer children={children} />
                : children }
            </OverlayPage>
        )
    }
    return (
        <Page>
            { container ? 
                 <ContentContainer children={children} />
            : children }
        </Page>
    )
  };
