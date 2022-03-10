
import { FormValues, FormLabels, FormContainer } from '../../../../../atoms';
import { FormValueContainer, CheckboxInnerContainer } from '../../../../../atoms/form/values/FormValues.styled';
import { FormLabelContainer } from '../../../../../atoms/form/labels/FormLabels.styled';
import { defaultBattleNet, regions, locals } from './libs/defaults';
import styled from '@emotion/styled'


const BattleNetContainer = styled.div`

`

const BattleNetForm = styled.div`
  flex: none;
  float: left;
  width: 280px;
  opacity: 0.55;
  padding-top: 35px;
  
  background: black;
  height: 100vh;
  align-items: center;
  text-align: center;
  margin: auto;
  justify-content: center;
  border-right: 1px solid #000000;
  img {
    width: 100%;
    max-width: 200px;
    padding-left: 25px;
  }

  ${FormValueContainer} {
    padding: 0px;
    margin-top: 14px;
    ul {
      display: block;
      width: 100%;
      padding-left: 35px;
    }
    li {
      float: right;
      width: 50%;
    }
    ${CheckboxInnerContainer} {
      display: block;
    }
  }
`
export default function AccountBnetEdit ({  account, onAttributeChanged }:any) {
   const { battlenet = defaultBattleNet } = account
    return (
      <BattleNetContainer>
        <BattleNetForm>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/ab/Battle.net_2021_logo.jpg" />
            <FormValues
              rows={[
                { type: 'checkbox', name: "automated", title: "Automated", value: battlenet.automated, onChange: onAttributeChanged },
                { type: 'checkbox', name: "offline", title: "Offline", value: battlenet.automated, onChange: onAttributeChanged },
              ]}
          />
        </BattleNetForm>
        <FormContainer>
          <FormLabels 
              items={[
                'Username:',
                'Password:',
                '',
                'Session:',
                'Region:',
                'Local:',
              ]}
          />
          <FormValues
              rows={[
                { type: 'text', name: "credentials.username", placeholder: "automated@blizzard.com", value: battlenet.credentials.email, onChange: onAttributeChanged },
                { type: 'password', name: "credentials.password", placeholder: "Encrypted", value: battlenet.credentials.password, onChange: onAttributeChanged },
                { 
                  type: 'empty', 
                },
                { type: 'select', value: null, name: 'modifier', options: [], onChange: onAttributeChanged },
                { type: 'select', name: "region", value: battlenet.region, options: regions, onChange: onAttributeChanged },
                { type: 'select', name: "local", value: battlenet.local, options: locals, onChange: onAttributeChanged },
              ]}
          />
        </FormContainer>
    </BattleNetContainer>
    );
  };

