import { Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { BackgroundProps } from './Background';
import { Background } from './Background';

const Template: Story<BackgroundProps> = (args: BackgroundProps) => (
    <Background {...args}>
        <Typography variant="h1" align="center">
            Lorem Ipsum
        </Typography>
        <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nunc risus. Morbi augue sapien, rutrum ac
            arcu in, mattis facilisis massa. Quisque vel elementum tortor. Vestibulum vel orci elementum dolor convallis
            ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Nunc dui metus, tempus sit amet elit non, faucibus maximus arcu. Nam facilisis, massa in dictum aliquam,
            ipsum purus viverra justo, sit amet maximus metus sapien eget mi. Nam et lectus volutpat, lacinia neque eu,
            gravida ligula. Vestibulum vel felis sit amet libero imperdiet tincidunt non ac ligula. Duis ac quam
            sodales, laoreet dui at, vestibulum ex. Cras molestie tortor in eros congue, ut eleifend metus condimentum.
            Vivamus vitae nulla orci. Etiam elit massa, rutrum ac venenatis quis, fermentum nec mauris.
        </Typography>
        <Typography paragraph>
            Curabitur lobortis urna quis elit rhoncus, eu blandit lacus consequat. Aliquam id eleifend neque. Mauris ac
            metus velit. Integer a diam volutpat, lacinia erat eu, luctus eros. Vivamus at neque est. Maecenas accumsan
            nibh vel dolor blandit, laoreet dictum mi lobortis. Proin id purus accumsan, laoreet felis sit amet, laoreet
            purus. Ut bibendum lacus vel metus ultricies mollis. Phasellus lobortis malesuada est at tempor. Nam maximus
            urna vel rhoncus facilisis. Integer aliquam sit amet tellus at pharetra. Maecenas libero libero, scelerisque
            non turpis nec, ornare consectetur mi. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean consequat, risus a placerat fermentum, enim sem finibus nunc, a congue dui
            turpis non est. Vestibulum venenatis id dolor a fermentum. Suspendisse fringilla nunc nec neque luctus, vel
            vulputate risus vestibulum.
        </Typography>
        <Typography paragraph>
            Mauris a maximus tellus. Sed nec rhoncus tellus, ut suscipit tortor. Morbi sed pretium velit. Fusce aliquet
            finibus quam id dignissim. Praesent nulla velit, varius quis porta quis, sollicitudin eget sapien. Integer
            non dolor id felis vulputate scelerisque. Vivamus id venenatis risus. Duis tincidunt nulla mauris, vel
            imperdiet purus pharetra id.
        </Typography>
        <Typography paragraph>
            Vestibulum ut nibh sit amet arcu feugiat rhoncus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Cras metus diam, tempus faucibus vulputate pulvinar, tristique
            vehicula mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Nulla et lorem sit amet libero laoreet scelerisque at vel erat. Aliquam sed nibh sem. Quisque ac
            ipsum augue. Vivamus ante eros, dapibus pretium libero eget, pretium auctor purus. Nam augue orci, vulputate
            ac sem eu, placerat facilisis mi. Vestibulum vel risus vitae risus luctus sodales et vel neque. Nunc
            pellentesque leo nec aliquet egestas. Sed facilisis in dui hendrerit congue. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Vivamus a turpis magna. Praesent nibh justo, consectetur sit amet nisi ut,
            imperdiet suscipit est. Proin bibendum, ante in ullamcorper viverra, orci nibh egestas urna, sed tempus
            felis tortor ac nibh.
        </Typography>
        <Typography paragraph>
            Cras porttitor, lorem sit amet vestibulum sagittis, eros quam commodo ex, eu bibendum neque nisl nec ante.
            Sed quam tellus, faucibus tempus nunc vel, pharetra varius dolor. Curabitur porttitor ligula ut accumsan
            congue. Curabitur eget mattis odio. Vestibulum eros eros, dignissim a lectus vel, tincidunt fringilla erat.
            Nunc a ultricies dolor, ut semper lectus. Aenean vitae convallis eros. Curabitur pharetra lorem metus, vitae
            elementum velit suscipit eu. Nullam sit amet porttitor nibh, id vestibulum tellus.
        </Typography>
    </Background>
);

export default {
    title: 'Shared/Background',
    component: Background,
    argTypes: {
        imageUrl: { control: 'text' },
        color: { control: 'color' },
        tint: { control: 'boolean' },
    },
} as Meta;

export const WithImage = Template.bind({});
WithImage.args = {
    imageUrl: 'https://i.pinimg.com/originals/b1/11/b3/b111b3208c23fff980441d98c4fecb44.jpg',
    color: undefined,
    tint: false,
};

export const WithColor = Template.bind({});
WithColor.args = {
    imageUrl: undefined,
    color: '#e2f1e9',
    tint: true,
};
