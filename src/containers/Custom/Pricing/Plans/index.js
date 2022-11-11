import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import PlansWrapper, { PlanBox, BulletBox, ListBullet, ListDiv } from './plans.style';
import PropTypes from 'prop-types';
import Image from 'common/components/Image';
import CheckboxIcon from 'common/assets/image/pricing/check-circle.svg';

const Plans = ({ button }) => {
    const data = useStaticQuery(graphql`
    {
        allStrapiPricingPlan {
            nodes {
                planID
                title
                price
                buttonText
                part {
                    part
                }
            }
        }
    }
    `);

    const renderPlans = () => {
        const plan1 = plans.find(plan => plan.planID === 1);
        const plan2 = plans.find(plan => plan.planID === 2);
        const plan3 = plans.find(plan => plan.planID === 3);
        const plan4 = plans.find(plan => plan.planID === 4);

        return (
            <>
                <PlanBox>
                    <BulletBox borderColor="#9FE4F8" borderTop="6px">
                        <Heading as="h2" content={plan1.title} />
                        <h1 className="plan-heading">
                            <h1 style={{fontSize: '24px', display: 'block'}}>{plan1.price}</h1>
                        </h1>
                        <a href="https://app.clodura.ai/#/auth/register/"><Button {...button} title={plan1.buttonText} /></a>

                        {plan1.part.map(p => {
                            return (
                                <ListDiv>
                                    <ListBullet>
                                        <Image src={CheckboxIcon} style={{width: '22px', maxWidth: 'none'}}></Image>
                                    </ListBullet>
                                    <Text content={p.part}/>
                                </ListDiv>
                            )
                        })}
                    </BulletBox>
                </PlanBox>
                <PlanBox>
                    {/* <div className="recommendation">Clodura Recommends</div> */}
                    <BulletBox borderColor="#F58634" borderTop="0">
                        <Heading as="h2" content={plan2.title} />
                        <h1 className="plan-heading">
                            <h1>{plan2.price}</h1>
                            <span>per user/month</span>
                        </h1>
                        <a href="https://app.clodura.ai/#/auth/register/"><Button {...button} title={plan2.buttonText} /></a>
                        {plan2.part.slice(0, -1).map((p) => {
                            return (
                                <ListDiv>
                                    <ListBullet>
                                        <Image src={CheckboxIcon} style={{width: '22px', maxWidth: 'none'}}></Image>
                                    </ListBullet>
                                    <Text content={p.part} />
                                </ListDiv>
                            )
                        })}
                        {plan2.part.slice(-1).map((p) => {
                            return (
                                <>
                                <ListDiv className='last-bullet'>
                                    <Text content="*Standard FUP Limits will Apply" style={{fontSize: '12px'}} />
                                    </ListDiv>
                                    <ListDiv>
                                    <Text content={`-${p.part}`} style={{fontSize: '12px'}} />
                                </ListDiv>
                                </>
                            )
                        })}
                    </BulletBox>
                </PlanBox>
                <PlanBox>
                    <BulletBox borderColor="#9FE4F8" borderTop="6px">
                        <Heading as="h2" content={plan3.title} />
                        <h1 className="plan-heading">
                            <h1>$199</h1>
                            <span>per user/month</span>
                        </h1>
                        <a href="https://clodura.ai/request-demo/"><Button {...button} title={plan3.buttonText} /></a>
                        {plan3.part.slice(0, -1).map((p) => {
                            return (
                                <ListDiv>
                                    <ListBullet>
                                        <Image src={CheckboxIcon} style={{width: '22px', maxWidth: 'none'}}></Image>
                                    </ListBullet>
                                    <Text content={p.part} />
                                </ListDiv>
                                
                            )
                        })}
                        {plan3.part.slice(-1).map((p) => {
                            return (
                                <>
                                <ListDiv className='last-bullet'>
                                    <Text content="*Standard FUP Limits will Apply" style={{fontSize: '12px'}} />
                                    </ListDiv>
                                    <ListDiv>
                                    <Text content={`-${p.part}`} style={{fontSize: '12px'}} />
                                </ListDiv>
                                </>
                            )
                        })}
                    </BulletBox>
                </PlanBox>
                <PlanBox>
                    <BulletBox borderColor="#9FE4F8" borderTop="6px">
                        <Heading as="h2" content={plan4.title} />
                        <h1 className="plan-heading">
                            <h1>$1099</h1>
                            
                        </h1>
                        <a href="https://clodura.ai/request-demo/"><Button {...button} title={plan4.buttonText} /></a>
                        {plan4.part.slice(0, -1).map((p) => {
                            return (
                                <ListDiv>
                                    <ListBullet>
                                        <Image src={CheckboxIcon} style={{width: '22px', maxWidth: 'none'}}></Image>
                                    </ListBullet>
                                    <Text content={p.part} />
                                </ListDiv>
                                
                            )
                        })}
                        {plan4.part.slice(-1).map((p) => {
                            return (
                                <>
                                <ListDiv className='last-bullet'>
                                    <Text content="-Direct dials from partner network at $0.5 per contact." style={{fontSize: '12px'}} />
                                    </ListDiv>
                                    
                                </>
                            )
                        })}
                    </BulletBox>
                </PlanBox>
            </>
        )
    }

    const plans = data.allStrapiPricingPlan.nodes;
    return (
        <>
            <PlansWrapper>
                {renderPlans()}
            </PlansWrapper>
        </>
    );
};

Plans.propTypes = {
    button: PropTypes.object
}

Plans.defaultProps = {
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'tertiaryWithBg',
        minHeight: 'auto',
        height: '40px',
    }
}

export default Plans;
